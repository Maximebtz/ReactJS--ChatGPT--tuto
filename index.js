// Importer les classes nécessaires à partir du module "openai"
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser') 
const cors = require('cors') 


// Créer une instance de Configuration pour configurer l'accès à l'API OpenAI
const configuration = new Configuration({
    organization: "org-zUEuiRPeedyVJzGazYXMItEr", // Remplacez "org-zUEuiRPeedyVJzGazYXMItEr" par votre identifiant d'organisation (organization)
    apiKey: "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", // Remplacez "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" par votre clé d'API (apiKey)
});

// Créer une instance de OpenAIApi en utilisant la configuration précédente
const openai = new OpenAIApi(configuration);

// Create a simple express API that calls the function above
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async (req, res) => {
    const {message} = req.body;
    console.log(message)
    // Appeler la méthode createCompletion de l'objet openai pour obtenir une réponse basée sur le modèle spécifié
    // const response = await openai.createCompletion({
    //     model: "text-davinci-003", // Le modèle que vous souhaitez utiliser, par exemple "text-davinci-003"
    //     prompt: "Say this is a test", // Le texte qui servira de prompt pour générer la réponse
    //     max_tokens: 7, // Le nombre maximum de tokens dans la réponse générée
    //     temperature: 0, // La température de l'échantillonnage. Une valeur plus élevée (comme 1.0) rendra la sortie plus diversifiée, tandis qu'une valeur plus basse (comme 0.0) rendra la sortie plus déterministe.
    // });

    // Afficher la réponse générée dans la console
    console.log(response.data.choices[0].text);
    res.json({
        // data: response.data
        data: message,
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});