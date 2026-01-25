const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 font-mono text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-primary underline transition-colors hover:text-primary/90"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
