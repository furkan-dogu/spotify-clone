import { Menu } from "@headlessui/react";
import { Icon } from "helpers/Icons";
import { Link } from "react-router-dom";

const Auth = () => {
  const user = {
    name: "Furkan Doğu",
    avatar: "https://avatars.githubusercontent.com/u/140394399?v=4",
  };
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full p-0.5 mr-2"
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  to={""}
                >
                  Account
                  <Icon name="external" size={16} />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  to={""}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  to={""}
                >
                  Log out
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
