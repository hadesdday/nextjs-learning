import useSWR from "swr";

export interface IStudentDetailsPageProps {
  studentId: string;
}

export function StudentDetailsPage({ studentId }: IStudentDetailsPageProps) {
  function onMutate() {
    mutate(
      {
        name: "testtt",
      },
      true
    );
  }
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000,
    }
  );
  // (the above will use the default we set before in _app.tsx (fetcher...))
  //   const {} = useSWR(`/students/${studentId}`,()=>axiosClient.get("asd")); //use this or the above
  return (
    <div>
      Name: {data?.name || "--"}
      <button onClick={onMutate}>Mutate</button>
    </div>
  );
}
