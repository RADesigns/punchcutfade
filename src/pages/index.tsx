import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

//import Navbar from "@/components/Navbar";
//import { NoteEditor } from "../components/NoteEditor";
import { NoteCard } from "../components/NoteCard";

import { api, type RouterOutputs } from "@/utils/api";
import LargeHeading from "@/components/ui/LargeHeading";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PunchCutFade</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>  
        <HomeContent />
      </section>
    </>
  );
};

export default Home;

type Topic = RouterOutputs["topic"]["getAll"][0];

const HomeContent: React.FC = () => {
  const { data: sessionData } = useSession();
  
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => {
        setSelectedTopic(selectedTopic ?? data[0] ?? null);
      },
    }
  );

  /* const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  }); */

  const { data: recentNotes } = api.note.getRecent.useQuery();

  /* const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  }); */

  /* const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  }); */

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 px-40 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full '>
          <LargeHeading
            size='sm'
            className='three-d '>
            {sessionData ? "Recent notes" : "Something Goes Here"}
          </LargeHeading>

          {/* <Paragraph className='max-w-xl lg:text-left'>
            With the Text Similarity API, you can easily determine the
            similarity between two pieces of text with a free{' '}
            <Link
              href='/login'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              API key
            </Link>
            .
          </Paragraph> */}
          {sessionData?.user ?
          <div className=' w-full '>
            {recentNotes?.map((note) => (
              <div key={note.id} className="mt-5">
                <NoteCard
                  note={note}
                  
                />
              </div>
            ))}
            </div>
            :
            <div className='relative w-full max-w-lg lg:max-w-xg lg:left-1/2 aspect-square lg:absolute'>
              <Image
                priority
                className='img-shadow '
                quality={100}
                style={{ objectFit: 'contain' }}
                fill
                src='/typewriter.png'
                alt='typewriter'
              /> 
            </div>
          }
        </div>
      </div>
    </div>
  );
};
