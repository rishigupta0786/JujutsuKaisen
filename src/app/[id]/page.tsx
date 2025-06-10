'use client'
import ParticularDetail from '@/components/ParticularDetail';
import { Badge } from "@/components/ui/badge";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';

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
      return response.data.data;
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredData = data?.filter((item: JJKDataItem) => {
    return Number(item.id) === Number(id);
  });

  if (!filteredData || filteredData.length === 0) return <div>No data found</div>;

  const character = filteredData[0];

  return (
    <div className="md:container mx-auto p-4">
      {/* Mobile View (stacked vertically) */}
      <div className="block md:hidden space-y-4">
        <div className="bg-card rounded-lg p-4 shadow">
          <Image
            src={character.image_url}
            alt={character.name}
            width={400}
            height={400}
            className='w-full h-auto rounded-lg mb-4'
            priority
          />
        </div>
        
        <div className="bg-card rounded-lg p-4 shadow">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <div className="flex flex-col gap-3 text-xl">
            <div>Species : <Badge variant="default">{character.species || "UNKNOWN"}</Badge> </div>
            <div>Grade : <Badge variant="default">{character.grade || "UNKNOWN"}</Badge></div>
            <div>Status : <Badge variant="default">{character.status || "UNKNOWN"}</Badge></div>
            <div>Age : <Badge variant="destructive">{character.age || "UNKNOWN"}</Badge></div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-4 shadow">
          <ParticularDetail data={character} />
        </div>
      </div>

      {/* Desktop View (original resizable layout) */}
      <div className="hidden md:block">
        <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
          <ResizablePanel defaultSize={70}>
            <div className="h-[90vh] p-4">
              <ParticularDetail data={character} />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={40}>
                <div className="p-4 space-y-4">
                  <h2 className="text-2xl font-bold mb-4">Details</h2>
                  <div className="flex flex-col gap-3 text-xl">
                    <div>Species : <Badge variant="default">{character.species || "UNKNOWN"}</Badge> </div>
                    <div>Grade : <Badge variant="default">{character.grade || "UNKNOWN"}</Badge></div>
                    <div>Status : <Badge variant="default">{character.status || "UNKNOWN"}</Badge></div>
                    <div>Age : <Badge variant="destructive">{character.age || "UNKNOWN"}</Badge></div>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={60}>
                <div className="p-4">
                  <Image
                    src={character.image_url}
                    alt={character.name}
                    width={400}
                    height={400}
                    className='w-full h-auto rounded-lg mb-4'
                  />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}