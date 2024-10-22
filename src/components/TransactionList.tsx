/** @format */

export default function TransactionList({ data }: { data: any }) {
  return (
    <section>
      {data.map((transaction: any, index: number) => (
        <div key={index} className="bg-slate-500 p-4 m-4 rounded-lg min-w-fit">
          <h1 className="text-2xl font-bold">Transaction {index}</h1>
          <p>ID: {transaction.id}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Sender: {transaction.from}</p>
          <p>Recipient: {transaction.to}</p>
          <p>Type: {transaction.type}</p>
        </div>
      ))}
    </section>
  );
}
