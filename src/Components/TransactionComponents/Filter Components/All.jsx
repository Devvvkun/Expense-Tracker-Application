const All = ({ Activebtn, setActivebtn }) => {
  return (
    <button
      className={
        Activebtn === "All"
          ? "filter-active"
          : "filter-inactive"
      }
      onClick={() => {
        setActivebtn("All");
      }}
    >
      All
    </button>
  );
};

export default All;