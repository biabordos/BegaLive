# Export Blender Model to glTF for Web Integration

## Instructions for Exporting harta5.blend to Web Format

1. **Open Blender**:
   - Launch Blender application
   - Open the file: `harta_extracted/harta/harta5.blend`

2. **Prepare the Scene**:
   - Make sure your 3D map/model is visible
   - Check that materials and textures are applied correctly
   - Ensure the model is positioned at the origin (0,0,0) if needed

3. **Export to glTF**:
   - Go to **File** → **Export** → **glTF 2.0 (.gltf/.glb)**
   - In the export dialog:
     - **Format**: glTF Binary (.glb) - recommended for web
     - **Include**: Check all options (Geometry, Materials, Textures, Cameras, Lights)
     - **Transform**: Keep default
     - **Compression**: Optional (can reduce file size)

4. **Save Location**:
   - Navigate to your project folder: `c:\Users\ACER\Desktop\bega\models\`
   - Save as: `harta.glb` or `harta.gltf`
   - Click **Export glTF 2.0**

5. **Test Integration**:
   - Refresh your browser at `http://localhost:8000`
   - The 3D model should now appear in the "3D River Map" section
   - Use the controls to toggle view and reset camera

## Troubleshooting

- **Model doesn't load**: Check browser console for errors (F12 → Console)
- **Model too big/small**: Adjust scale in the `load3DModel()` function in `app.js`
- **Materials missing**: Ensure materials are included in export settings
- **Performance issues**: Consider simplifying geometry or using compression

## Alternative: Manual Placement

If you prefer not to export, you can:
- Take screenshots of your Blender model from different angles
- Save them as images in the `models/` folder
- I'll help modify the code to display images instead of 3D model