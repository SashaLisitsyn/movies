export default function Footer() {
  return (
    <footer className="page-footer teal darken-4">
      <div className="container">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Lisitsyn Alexander
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/SashaLisitsyn/movies"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
