<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Teste React Único</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body { font-family: sans-serif; padding: 20px; }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        
        // --- COLE SEU CÓDIGO REACT AQUI EMBAIXO ---
        // Se o seu código tiver "import React from 'react'", APAGUE essas linhas de import.
        
        function App() {
            const [contador, setContador] = React.useState(0);

            return (
                <div>
                    <h1>Olá, mundo!</h1>
                    <p>Contagem: {contador}</p>
                    <button onClick={() => setContador(contador + 1)}>
                        Aumentar
                    </button>
                </div>
            );
        }

        // --- FIM DO SEU CÓDIGO ---

        // Renderização (NÃO APAGUE ISSO)
        const rootElement = document.getElementById('root');
        const root = ReactDOM.createRoot(rootElement);
        // Certifique-se que o nome do componente aqui é o mesmo da sua função principal (ex: <App />)
        root.render(<App />);

    </script>
</body>
</html>
