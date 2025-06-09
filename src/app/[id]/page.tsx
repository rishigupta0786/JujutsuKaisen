'use client'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation';

import Detail from '@/components/Detail';
import ParticularDetail from '@/components/ParticularDetail';
import Image from 'next/image';
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
export default function Page() {

  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['jjkdata'],
    queryFn: async () => {
      const response = await axios.get("/asset/JJKdata.json");
      // console.log(response.data);
      return response.data.data;
    }
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const filteredData = data?.filter((item: JJKDataItem) => {
    const matchesFilter = Number(item.id) === Number(id);
    return matchesFilter;
  });
  console.log(filteredData[0].image_url);

  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="border">
        <ResizablePanel defaultSize={70}>
          <div className="h-[90vh]">
            <ParticularDetail data={filteredData[0]} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={40}>
              <div>
                <Detail data={filteredData[0]} />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60}>
              <div>
                <Image
                  src={filteredData[0].image_url}
                  alt={filteredData[0].name}
                  width={100}
                  height={100}
                  className='w-full mb-2'
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>


    </div>
  )
}
