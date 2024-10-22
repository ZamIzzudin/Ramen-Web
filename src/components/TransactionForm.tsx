/** @format */
"use client";

import { useState, useEffect } from "react";

export default function TransactionForm() {
  const [form, setForm] = useState({ to: "", amount: 0 });
  const [showResponse, setResponse] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("message", handleResponse);

    return () => {
      window.removeEventListener("message", handleResponse);
    };
  }, []);

  function handleResponse(event: MessageEvent) {
    if (event.source !== window) return;

    if (event.data.type === "ramen-response") {
      setResponse(event.data.data.message);
    }
  }

  function handleSubmit() {
    const data = {
      to: form.to,
      amount: form.amount,
      type: "send",
    };
    if (data.to === "" || data.amount === 0) {
      setResponse("Please fill in all fields");
      return;
    }

    window.postMessage({ type: "ramen-transaction", data }, "*");
  }

  return (
    <section className="w-full flex items-center justify-center flex-col">
      {showResponse && <p>{showResponse}</p>}
      <form className="flex flex-col w-1/2 gap-5">
        <input
          type="text"
          name="to"
          placeholder="Recipient Address"
          value={form.to}
          onChange={(e) => setForm({ ...form, to: e.target.value })}
        />
        <input
          type="number"
          name="amount"
          placeholder="amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: parseInt(e.target.value) })
          }
        />
        <button type="button" onClick={() => handleSubmit()}>
          Send
        </button>
      </form>
    </section>
  );
}
