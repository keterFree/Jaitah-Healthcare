"use client";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
