with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
        nodePackages."@astrojs/language-server"
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}
