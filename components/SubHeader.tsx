interface msgProps {
  message: string,
};



export const SubHeader = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-8">
        {message ? message : "UI/UX Design"}
      </h1>
      
    </header>
  )
}