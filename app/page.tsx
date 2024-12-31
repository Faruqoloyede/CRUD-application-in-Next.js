import Table from '../components/Table';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 sm:px-6 ">
        <h1 className="text-5xl text-black text-center">Users</h1>
        <div className="mt-10">
          <Table />
        </div>
    </div>
  );
}
