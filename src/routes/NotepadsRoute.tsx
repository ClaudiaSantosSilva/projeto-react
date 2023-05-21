const notepads = [
  {
    id: 1,
    title: "alguma string",
    subtitle: "outra string",
    content: "uma stringona",
    created_at: new Date(),
  },

  {
    id: 2,
    title: "alguma string22",
    subtitle: "outra string22",
    content: "uma stringona22",
    created_at: new Date(),
  },

  {
    id: 3,
    title: "alguma string33",
    subtitle: "outra string33",
    content: "uma stringona33",
    created_at: new Date(),
  },

  {
    id: 4,
    title: "alguma string44",
    subtitle: "outra string44",
    content: "uma stringona44",
    created_at: new Date(),
  },
];

export function NotepadsRoute() {
  return (
    <div>
      <div className="bg-white m-4 rounded-lg shadow-md p-4">
        {notepads.map((notepad) => {
          return (
            <div key={notepad.id} className="border-b py-2">
              <span className="text-sm text-gray-500">
                {notepad.created_at.toLocaleDateString()}
              </span>
              <h2 className="text-lg font-bold leading-tight">
                {notepad.title}
              </h2>
              <p>{notepad.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
