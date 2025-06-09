import React from 'react'

type DetailProps = {
    data: {
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
    };
};

export default function Detail({ data }: DetailProps) {
    // console.log(data);

    return (
        <div>
            <div className='text-2xl font-bold flex justify-center py-3'> DETAILS</div>
            <div className='text-xl text-red-600 px-4 flex flex-col gap-2 py-4'>
                <div>AGE : {data.age || 'UNKNOWN'}</div>
                <div>STATUS : {data.status || 'UNKNOWN'}</div>
                <div>GRADE : {data.grade  || 'UNKNOWN'}</div>
                <div>SPECIES : {data.species  || 'UNKNOWN'}</div>
            </div>
        </div>
    )
}
