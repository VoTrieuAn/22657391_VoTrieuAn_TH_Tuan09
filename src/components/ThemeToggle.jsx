import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="mt-5 space-y-4">
      <h1 className="text-2xl font-bold">Chế độ Dark/Light</h1>
      <div className="flex flex-col items-center space-y-4">
        <div className={`flex items-center justify-center space-x-2`}>
          <button
            className="rounded-md border p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <span className="text-lg font-medium">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </div>

        <div
          className={`w-full max-w-md rounded-lg border p-6 ${theme === "dark" ? "bg-slate-800 text-white" : ""}`}
        >
          <h3 className="mb-2 text-xl font-semibold">Xem chế độ hiện tại</h3>
          <p>
            Chế độ hiện tại:{" "}
            <strong>{theme === "dark" ? "Dark Mode" : "Light Mode"}</strong>
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Chế độ Dark/Light sẽ thay đổi màu nền và màu chữ của trang web.
          </p>
        </div>

        <div className="">
          <div
            className={`w-full rounded-md border p-4 text-center ${theme === "dark" ? "bg-slate-800 text-slate-200" : "bg-white text-slate-900"}`}
          >
            <p>Nội dung với màu mặc định</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThemeToggle;
