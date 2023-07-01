//fetchテスト
import Link from "next/link";

export const metadata = {
  title: "API test",
  description: "Fetch API test",
};

const getMembers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const members = await response.json();
  return members;
};

const MembersList = async () => {
  const members = await getMembers();
  return (
    <>
      <h1>ユーザー一覧</h1>
      <ul>{members && members.map((member) => <li key={member.id}>{member.name}</li>)}</ul>

      <Link href='/'>Homeへ</Link>
    </>
  );
};

export default MembersList;
