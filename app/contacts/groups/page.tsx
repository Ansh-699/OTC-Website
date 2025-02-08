import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Groups",
  description: "Manage contact groups",
}

interface ContactGroup {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const mockContactGroups: ContactGroup[] = [
  {
    id: "1",
    name: "Family",
    email: "family@example.com",
    phoneNumber: "123-456-7890",
  },
  {
    id: "2",
    name: "Friends",
    email: "friends@example.com",
    phoneNumber: "098-765-4321",
  },
  {
    id: "3",
    name: "Work",
    email: "work@example.com",
    phoneNumber: "111-222-3333",
  },
];

export default function ContactGroupsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Contact Groups</h1>
      <div className="grid gap-4">
        {mockContactGroups.map((group) => (
          <div key={group.id} className="bg-white rounded-md shadow-sm border p-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">{group.name}</h2>
              <p className="text-gray-500">{group.email}</p>
              <p className="text-gray-500">{group.phoneNumber}</p>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
