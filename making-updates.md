# In order to edit something in a Chunky product, you must first understand it's architecture.

## Architecture

First file is **chunky.json** located in the root folder, here we are setting up things such as: logo image, button color, nav additional options, languages and we will "tell" our application from where to get the translated strings.
Other keys are pretty meaningful by name.

Our Product is structured in **chunks**. For this website we only have 1 chunk: **intro**

Another important file would be: **chunk.json** where our configuration is located: router, additional pages, footer.

## Chunk.json

In **chunk.json** we tell our routes what to show, which components and with that properties. (a list of components can be found [here](http://www.chunky.io/docs), more to be added)

**routes** key offers the possibility of adding new pages. Every new item name is matched with a screen id, which can be located in the chunks folder under screens. Additional keys include: path, noFooter and components.

_path_ will define our newly created path.
_noFooter_ must be set to true since we are using a custom footer.
_components_ this key will tell our page what to show inside

## Update texts

The text inside the website is located in: **strings.json** and in the folder **text** under assets.

**strings.json** this file is used for editing text such as: titles and strings inside the header and footer.

All of this are under a specific key, which show us which component should be translated. Additionally the respective components should have a "translation" prop set to true.

Also all are mapped based on what languages we want. For now we have: **en and cn**.

Other content is located in the .md files. Here we have 3 folders, we got the default one called assets and 2 additional folder: **en and cn**. If we want to update some content we should update it in these 3 places.

If we want to add an additional language we need to add it in the **chunky.json** file under the **languages** key. You will need to add a new object with 2 keys: label and value. That value will be used also in **strings.json** file and we need to create a new folder with the specific value.

For example if we add spanish language, a new object will be like:

```json
{
  "label": "Spanish",
  "value": "sp"
}
```

And in **strings.json** we would create "sp" keys where we put our translated text, just like "en" is put there.

Don't forget to also make a folder under assets called: "sp" where we put our .md files with the same structure as the others. For an easy start just **copy and paste everything from en folder to sp folder** and then just replace the text with the translated one in the **sp** folder

This should cover it for now.

If you have any additional questions send me an email at: robert@fluidtrends.com and I'll update this doc. Or if something isn't right you can update it yourself and submit a PR.

@[Carmel Product 2018](https://carmel.io)
