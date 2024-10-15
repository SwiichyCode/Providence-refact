import { Fragment } from 'react';
import { WarcraftlogsForm } from '@/core/forms/warcraftlogs-form';
import { db } from '@/configs/server/db';
import Link from 'next/link';

export default async function WarcraftLogsPage() {
  const warcraftlogs = await db.warcraftLog.findMany();

  return (
    <Fragment>
      <section className="space-y-8">
        <h1 className="text-4xl font-bold">WarcraftLogs</h1>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <WarcraftlogsForm />

          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Logs</h2>
            <div className="flex flex-col space-y-4">
              {warcraftlogs.map((log) => (
                <div key={log.id} className="flex space-x-4">
                  <Link href={log.url} target="_blank" rel="noreferrer" className="text-blue-500">
                    {log.url}
                  </Link>
                  <span>{log.date.toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
