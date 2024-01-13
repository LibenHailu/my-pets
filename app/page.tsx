import postgres from "postgres";
import Image from 'next/image'
import { CreatePet } from "../components/create-pet";
import { PetItem } from "../components/pet-item";
import { Empty } from "../components/empty";

const sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "allow",
});

export default async function Home() {
  const pets = await sql`SELECT * FROM pets`;

  return (
    <div >
      <CreatePet />
      <div className="divider" />
      {pets.length === 0 && <Empty />}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">My Pets</h1>
        {pets.map(pet => <PetItem key={pet.name} name={pet.name} owner={pet.owner} />)
        }
      </div>

    </div>
  )
}
