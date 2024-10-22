/** @format */
"use client";

import { useEffect, useState } from "react";

import BlockSlider from "@/components/BlockSlider";
import api from "@/utility/api";
import TransactionList from "@/components/TransactionList";

export default function Home() {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    api.getBlocks().then((data) => {
      setBlocks(data);
      setSelected(0);
    });
  }, []);

  return (
    <main className="flex items-center justify-start min-h-screen flex-col py-10">
      <BlockSlider data={blocks} setSelected={setSelected} />
      {selected !== null && (
        <TransactionList data={blocks[selected]?.transaction} />
      )}
    </main>
  );
}
