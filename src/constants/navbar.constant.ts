export type TNavMenuItem = {
  label: string;
  path: string;
  show: boolean;
}[];
export const NavMenuOption = () => {
  const user = null;
  const profileInfo = {
    role: "recruiter",
  };
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Applied Jobs",
      path: "/applied-jobs",
      show: profileInfo?.role === "jobSeeker",
    },
    {
      label: "Browse Jobs",
      path: "/browse-jobs",
      show: profileInfo?.role === "jobSeeker",
    },
    {
      label: "Saved Jobs",
      path: "/saved-jobs",
      show: profileInfo?.role === "jobSeeker",
    },
    {
      label: "Companies",
      path: "/companies",
      show: profileInfo?.role === "jobSeeker",
    },
    {
      label: "My Jobs",
      path: "/my-jobs",
      show: profileInfo?.role === "recruiter",
    },
    {
      label: "Applicants",
      path: "/applicants",
      show: profileInfo?.role === "recruiter",
    },
    {
      label: "Post a Job",
      path: "/post-job",
      show: profileInfo?.role === "recruiter",
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
  ];
  return menuItems;
};
