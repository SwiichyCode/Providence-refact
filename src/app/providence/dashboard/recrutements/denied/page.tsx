import { Fragment } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card';
import { db } from '@/configs/server/db';

export default async function RecruitmentsDeniedPage() {
  const recruitments = await db.recruitment.findMany({
    where: {
      status: 'DENIED',
    },
    orderBy: {
      date: 'desc',
    },
  });

  return (
    <Fragment>
      <ul role="list" className="w-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recruitments.map((recruitment) => (
          <Link href={`recrutements/${recruitment.id}`} key={recruitment.id}>
            <Card>
              <CardHeader>
                <CardTitle>
                  {recruitment.pseudo} - ({recruitment.status})
                </CardTitle>
                <CardDescription>
                  {recruitment.class} / {recruitment.discord}
                </CardDescription>
              </CardHeader>
              <CardContent className="truncate">{recruitment.presentation}</CardContent>
            </Card>
          </Link>
        ))}
      </ul>
    </Fragment>
  );
}
