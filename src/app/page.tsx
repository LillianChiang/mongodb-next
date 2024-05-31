import Link from 'next/link';


const Home = () => {
  return (
    <div className="w-screen py-20 justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold"> Next.js 14 and mongo db</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
            <Link
            href="/employees/create">
                Create
            </Link>
        </div>

      </div>
    </div>

  );
};


export default Home;