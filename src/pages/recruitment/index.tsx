import { Trans } from '@/components/common';
import { MainLayout } from '@/components/layout';
import { Banner } from '@/components/recruitment';
import Link from 'next/link';
import type { Recruitment } from '@/types';
import { instance } from '@/utils';
import { useState, useEffect, useMemo, type FC } from 'react';
import { useRouter } from 'next/router';
import { formatDate } from '@/utils';
import useLang from '@/hooks/useLang';
interface RecruitmentProps {
    recruitments: Recruitment[];
}

const Recruitment: FC<RecruitmentProps> = ({ recruitments }) => {
    const { currentLanguage } = useLang()
    const items = useMemo(() => recruitments.map((item, index) => (
        <Link
            href={`/recruitment/${item.id}`}
            className={`col-span-1 mb-10`}
            key={index}
        >
            <div>
                <h1 className='text-xl font-medium text-primary'>
                    {item[`title${currentLanguage}` as keyof typeof item]}
                </h1>
                <div className='text-sm'>
                    {formatDate(item.deadline, ' - ')}
                </div>
            </div>
        </Link>
    )), [recruitments, currentLanguage])

    return (
        <MainLayout title="Tuyển dụng">
            <Banner />
            <h1 className='mx-10 mt-10 border-b-[1px] border-[#000] py-5 text-2xl font-medium uppercase md:mx-40'>
                <Trans text='recruitment.title' />
            </h1>
            <div className='my-20 grid px-10 md:grid-cols-2 md:gap-2 md:px-40'>
                {items}
            </div>
        </MainLayout>
    );
};

export async function getServerSideProps() {
    const recruitments: Recruitment[] = (await instance.get(`/recruitment?perPage=20`)).data || [];
    return {
        props: {
            recruitments
        },
    };
}

export default Recruitment;
