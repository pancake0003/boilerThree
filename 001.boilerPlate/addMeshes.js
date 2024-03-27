import * as THREE from 'three'

//export: declaration to import this into main.js
export const addBoilerPlateMesh = () => {
    const box = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xFFBF00});
    const boxMesh = new THREE.Mesh(box, boxMaterial);
    boxMesh.position.set(-2, 0, 0);
    return boxMesh;
}

export function addStandardMesh (){
    const box = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshStandardMaterial({color: 0xDFFF00});
    const boxMesh = new THREE.Mesh(box, boxMaterial);
    boxMesh.position.set(2, 0, 0);
    return boxMesh;
}