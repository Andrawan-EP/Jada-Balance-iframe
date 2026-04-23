import "./App.css";
import { dummyData } from "./dummyData.tsx";
import JadaLogo from "/JadaLogo.svg";

import { Flex, Table } from "antd";
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

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: "16px" }}
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
        }}
      >
        <Table columns={columns} dataSource={balanceDatta} pagination={false} />
      </div>
    </>
  );
}

export default App;
