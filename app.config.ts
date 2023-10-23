export default defineAppConfig({
  ui: {
    strategy: "override",
    primary: "cool",
    avatar: {
      size: {
        xl: "h-32 w-32",
      },
    },
    card: {
      background: "bg-transparent",
      divide: "divide-none",
      ring: "ring-0 ",
      base: "border-b border-gray-600 ",
      rounded: "rounded-none",
    },
    tabs: {
      list: {
        rounded: "rounded-none",
        background: "bg-transparent",
        base: "border-b border-gray-600",
        marker: {
          wrapper:
            "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
          base: "w-full h-full",
          background: "bg-transparent",
        },
      },
    },
    container: {
      padding: "pa-0",
    },
  },
});
