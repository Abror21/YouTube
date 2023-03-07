import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({name, icon}) => {
        const activeEl = name === selectedCategory;
        return (
          <button
            onClick={() => setSelectedCategory(name)}
            className="category-btn"
            style={{
              background: activeEl && "#fc1503",
              color: "white",
            }}
            key={name}
          >
            <span
              style={{
                color: activeEl ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {icon}
            </span>
            <span
              style={{
                opacity: activeEl ? "1" : "0.8",
              }}
            >
              {name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
