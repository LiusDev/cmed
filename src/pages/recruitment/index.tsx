import { Trans } from '@/components/common';
import { MainLayout } from '@/components/layout';
import { Banner } from '@/components/recruitment';
import Link from 'next/link';
import type { Recruitment } from '@/types';
import { instance } from '@/utils';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { formatDate } from '@/utils';
interface RecruitmentProps {
    recruitment: Recruitment[];
}

const Recruitment = () => {
    const recruitment: Recruitment[] = [];
    const [data, setData] = useState<Recruitment[]>(recruitment);
    const router = useRouter();
    const fetchData = async () => {
        try {
            const recruitment: Recruitment[] =
                (await instance.get(`/recruitment?perPage=20`)).data || [];
            setData(recruitment);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [router.asPath]);
    return (
        <MainLayout title="Tuyển dụng">
            <Banner />
            <h1 className='mx-10 mt-10 border-b-[1px] border-[#000] py-5 text-2xl font-medium uppercase md:mx-40'>
                <Trans text='recruitment.title' />
            </h1>
            {!data.length ? (
                <div>Loading...</div>
            ) : (
                <div className='my-20 grid px-10 md:grid-cols-2 md:gap-2 md:px-40'>
                    {data.map((item, index) => (
                        <Link
                            href={`/recruitment/${item.id}`}
                            className={`col-span-1 mb-10`}
                            key={item.id}
                        >
                            <div>
                                <h1 className='text-xl font-medium text-primary'>
                                    {item.title}
                                </h1>
                                <div className='text-sm'>
                                    {formatDate(item.deadline, ' - ')}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </MainLayout>
    );
};

export default Recruitment;
