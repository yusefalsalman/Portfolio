export default function Footer() {
  return (
    <div className="text-primary-light py-10">
      <p className="text-center fade-in-up text-sm md:text-lg">
        &copy; {new Date().getFullYear()}{' '}
        <span className="myName font-bold text-amber-700">Yousef Salman</span>.
        All rights reserved.
      </p>
    </div>
  );
}
