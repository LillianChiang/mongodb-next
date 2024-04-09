import { useRouter } from 'next/navigation';

interface ClientData {
  ID: number;
  name: string;
  IdNumber: string;
  Gender: string;
  birthday: string;
  phone: string;
  mobile: string;
}

export default function Client() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return <div>Loading...</div>;
  }

  const client: ClientData | undefined = clientArray.find(
    (client) => client.ID === parseInt(id),
  );

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <div>
      <h1>{client.name}</h1>
      <p>ID: {client.ID}</p>
      <p>Gender: {client.Gender}</p>
      <p>Birthday: {client.birthday}</p>
      <p>Phone: {client.phone}</p>
      <p>Mobile: {client.mobile}</p>
    </div>
  );
}
