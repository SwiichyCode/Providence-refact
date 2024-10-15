import { Fragment } from 'react';
import { db } from '@/configs/server/db';

export default async function DashboardPage() {
  const users = await db.user.findMany();

  return (
    <Fragment>
      <section className="space-y-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <p>Users: {users.length}</p>
        </div>
      </section>
    </Fragment>
  );
}
