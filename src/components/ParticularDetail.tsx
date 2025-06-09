import React from 'react'

type ParticularDetailProps = {
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

export default function ParticularDetail({ data }: ParticularDetailProps) {
  // console.log(data);

  return (
    <div
      className="
        px-4 py-4
        resize
        overflow-auto
        max-w-full max-h-full
        [scrollbar-color:gray_transparent]
        [scrollbar-width:thin]
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-gray-400
        [&::-webkit-scrollbar-thumb]:rounded
      "
    >
      <div className='flex text-4xl justify-center font-bold font-newfont '>{data.name}</div>

      <div className='font-bold text-red-600'> APPREARANCE : </div>
      <div>
        {(data.appearance
          ? data.appearance.split('\n').map((line, idx) => (
          <div key={idx}>{line}</div>
        ))
          : 'UNKNOWN')}
      </div>

      <div className='font-bold text-red-600 pt-4'> PERSONALITY : </div>
      <div> {(data.personality
          ? data.personality.split('\n').map((line, idx) => (
          <div key={idx}>{line}</div>
        ))
          : 'UNKNOWN')}</div>

      <div className='font-bold text-red-600 pt-4'> ABILITIES : </div>
      <div>{(data.abilities
          ? data.abilities.split('\n').map((line, idx) => (
          <div key={idx}>{line}</div>
        ))
          : 'UNKNOWN')} </div>



    </div>
  );
}
