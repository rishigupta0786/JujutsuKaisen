'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface JJKDataItem {
    id: number;
    name: string;
    image_url: string;
    species: string;
    grade: string;
    status: string;
    age?: string[];
    abilities?: string;
    appearance?: string;
    personality?: string;
}

export default function Alldata() {
    const [filter, setFilter] = React.useState('all');
    const [searchQuery, setSearchQuery] = React.useState('');

    const { data, isLoading, error } = useQuery({
        queryKey: ['jjkdata'],
        queryFn: async () => {
            const response = await axios.get("/asset/JJKdata.json");
            console.log(response.data);
            return response.data.data;
        }
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const filteredData = data?.filter((item: JJKDataItem) => {
        const matchesFilter = filter === 'all' || (filter === 'cursed' ? item.species === null : item.species?.toLowerCase() === filter);
        const matchesSearch = searchQuery === '' || item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.species?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.grade?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.status?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <>
            <div className='flex flex-col md:flex-row mb-4 justify-between gap-4'>
                <div className='flex justify-center gap-4 items-center'>
                    <p className='text-xl'>Filter:</p>
                    <select
                        className='border rounded-sm p-2 bg-slate-950'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="human">Humans</option>
                        <option value="cursed">Cursed Spirits</option>
                    </select>
                </div>
                <div className='font-abcd text-2xl sm:text-3xl md:text-4xl text-shadow-red-900 text-red-500 text-center'>
                    J U J U T S U &nbsp; K A I S E N
                </div>
                <div className='flex justify-center'>
                    <input
                        type="text"
                        placeholder="Search by name"
                        className='border rounded p-2 w-full max-w-md'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {filteredData?.map((item: JJKDataItem) => {
                    return (
                        <div key={item.id} className='border rounded p-4 hover:scale-105 transition-transform duration-200'>
                            <Link href={`/${item.id}`}>
                                <div className='relative w-full h-64 mb-2'> {/* Fixed height container */}
                                    <Image
                                        src={item.image_url}
                                        alt={item.name}
                                        fill
                                        className='object-contain'
                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                    />
                                </div>
                                <div className='flex justify-center pb-2'>
                                    <h2
                                        className={`text-lg font-bold font-newfont 
                                        ${item.species?.toLowerCase() === 'human' ? 'text-blue-400' : 'text-red-500'}`}
                                    >
                                        {item.name}
                                    </h2>
                                </div>
                                <p><strong>Species:</strong> {item.species || 'Cursed species'}</p>
                                <p><strong>Grade:</strong> {item.grade || 'UNKNOWN'}</p>
                                <p><strong>Status:</strong> {item.status || 'UNKNOWN'}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}