var scripts = [
    "unpkg.com/react@18/umd/react.development.js",
    "unpkg.com/react-dom@18/umd/react-dom.development.js",
    "unpkg.com/@babel/standalone/babel.min.js"
];
for(var i in scripts){
    document.write('<script crossorigin src="https://' + scripts[i] + '"></script>');
};