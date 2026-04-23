import "./App.css";
import { dummyData } from "./dummyData.tsx";
import JadaLogo from "/JadaLogo.svg";

import { Flex, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import { TokenIcon } from "./utils/tokenIconMapper.tsx";

const columns = [
  {
    title: "Asset Name",
    key: "assetName",
    render: (
      _text: string,
      record: { assetName: string; assetSymbol: string },
    ) => (
      <Flex align="center" gap="12px">
        <TokenIcon symbol={record.assetSymbol} />
        <div>
          <div>{record?.assetName}</div>
          <div className="font-color-secondary">{record?.assetSymbol}</div>
        </div>
      </Flex>
    ),
  },
  {
    title: "Total Balance",
    dataIndex: "totalBalance",
    key: "totalBalance",
  },
  {
    title: "Available Balance",
    dataIndex: "availableBalance",
    key: "availableBalance",
  },
];

function App() {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const accountId = pathSegments[pathSegments.length - 1];
  const account = dummyData.find((d) => d.accountId === accountId);

  const accountName = account ? account.accountName : "No account found";
  const balanceDatta = account
    ? account.balances.map((balance) => ({ ...balance, key: balance.assetId }))
    : [];

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [tableScrollY, setTableScrollY] = useState<number>(400);

  useEffect(() => {
    const updateScrollY = () => {
      if (!containerRef.current || !headerRef.current) return;
      const containerHeight = containerRef.current.clientHeight;
      const headerHeight = headerRef.current.clientHeight;
      // 16px margin-bottom on header + 39px table thead height
      setTableScrollY(containerHeight - headerHeight - 16 - 39);
    };

    updateScrollY();
    const observer = new ResizeObserver(updateScrollY);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Flex vertical ref={containerRef} style={{ height: "100%", overflow: "hidden" }}>
      <Flex
        ref={headerRef}
        justify="space-between"
        align="center"
        style={{ marginBottom: "16px", flexShrink: 0 }}
      >
        <div style={{ fontSize: "16", fontWeight: "600" }}>
          {accountName}
        </div>
        <img src={JadaLogo} alt="Jada" style={{ height: "35px" }} />
      </Flex>
      <div
        style={{
          border: "1px solid #f0f0f0",
          borderRadius: "8px",
          overflow: "hidden",
          flex: 1,
          minHeight: 0,
        }}
      >
        <Table
          columns={columns}
          dataSource={balanceDatta}
          pagination={false}
          scroll={{ y: tableScrollY }}
        />
      </div>
    </Flex>
  );
}

export default App;
