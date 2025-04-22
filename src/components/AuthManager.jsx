import { useState } from "react";
import { LogOut, User } from "lucide-react";

const AuthManager = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError("Vui lòng nhập tên đăng nhập và mật khẩu");
      return;
    }

    // Mock login - in a real app, this would call an API
    if (password === "123456") {
      setUser({
        username: username,
        email: `${username.toLowerCase()}@example.com`,
        avatar:
          "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223",
      });
      setIsLoggedIn(true);
      setError("");
    } else {
      setError('Sai mật khẩu. Gợi ý: thử "123456"');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold">Quản lý user đăng nhập</h1>
      {!isLoggedIn ? (
        <div className="overflow-hidden rounded-lg border shadow-sm">
          <div className="border-b p-4">
            <h2 className="text-xl font-semibold">Đăng nhập</h2>
            <p className="text-sm text-gray-500">
              Nhập thông tin đăng nhập của bạn để truy cập vào hệ thống.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="space-y-4 p-4">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium">
                  Tên đăng nhập
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <div className="border-t bg-gray-50 p-4">
              <button type="submit">Đăng nhập</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border shadow-sm">
          <div className="border-b p-4">
            <h2 className="text-xl font-semibold">Chào mừng trở lại!</h2>
            <p className="text-sm text-gray-500">
              Bạn đã đăng nhập thành công vào hệ thống.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-blue-100">
              <img
                src={user?.avatar || "/placeholder.svg"}
                alt={user?.username}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">{user?.username}</h3>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <div className="w-full rounded-md bg-gray-100 p-3">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  Trạng thái:{" "}
                  <span className="font-medium text-green-500">
                    Đang hoạt động
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-t bg-gray-50 p-4">
            <button
              className="mx-auto flex items-center"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AuthManager;
