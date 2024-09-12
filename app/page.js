import { KataHari } from "@/katakata/kata.hari";
import { KataHariCreate } from "@/katakata/kata.hari.create";

async function getKata() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/GdwuslDMxRqM", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getKata();
  console.log(data);
  return (
    <div className=" space-y-2">
      <KataHariCreate />
      <div className="grid grid-cols-1 min-w-90 gap-4">
        {data?.map((kata) => (
          <KataHari
            key={kata._id}
            id={kata._id}
            nama={kata.nama}
            isi={kata.isi}
            createdAt={kata.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
