import React, { Fragment } from "react";
import ShadowBox from "../../components/shadowBox/ShadowBox";

export default function CostumerView() {
  const vendas = [
    {
      id: 0,
      produto: "G403",
      valor: 1500.0,
    },
    {
      id: 1,
      produto: "G403",
      valor: 1500.0,
    },
    {
      id: 2,
      produto: "G403",
      valor: 1500.0,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 0,
        width: "100%",
        padding: "10px",
      }}
    >
      <ShadowBox>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>Joao fulano</div>
          <div>quadra 15 valparaiso</div>
          <div>12123456789</div>
        </div>
      </ShadowBox>

      <ShadowBox>
        <div>
          {vendas.map((venda) => (
            <div style={{display:"flex", justifyContent:"space-between", width:"100%", padding:"5px"}}>
              <div>{venda.id}</div>
              <div>{venda.produto}</div>
              <div>{venda.valor}</div>
            </div>
          ))}
        </div>
      </ShadowBox>
    </div>
  );
}
