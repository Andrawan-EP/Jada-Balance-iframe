import btc from "../assets/tokenIcons/btc.svg";
import eth from "../assets/tokenIcons/eth.svg";
import sol from "../assets/tokenIcons/sol.svg";
import usd from "../assets/tokenIcons/usd.svg";
import usdt from "../assets/tokenIcons/usdt.svg";

const tokenIconMap: Record<string, string> = {
  BTC: btc,
  ETH: eth,
  SOL: sol,
  USD: usd,
  USDT: usdt,
};

export function TokenIcon({ symbol }: { symbol: string }) {
  const src = tokenIconMap[symbol];
  if (!src) return null;
  return (
    <div
      style={{
        borderRadius: "50%",
        border: "6px solid rgba(0, 0, 0, 0.06)",
        display: "inline-flex",
      }}
    >
      <img
        src={src}
        alt={symbol}
        width={16}
        height={16}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
