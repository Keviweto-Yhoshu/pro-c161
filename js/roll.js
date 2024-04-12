AFRAME.RegisterComponent("B_Ball",{
    init: function(){
        this.rollBall()
    },
    rollBall: function(){
        window.addEventListener("keydown",(e)=>{
            if (e.key==="c"){
                var ball = document.createElement("a-entity");
                ball.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:1,
                })
                ball.setAttribute("material","color","black");

                var cam = document.querySelector("#camera");

                pos = cam.getAttribute("position");
                
                ball.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })

                var camera = document.querySelector("#camera").object3D;

                var direction = new THREE.Vector3();

                camera.getWorldDirection(direction);

                ball.setAttribute("velocity", direction.multiScaler(-10))

                var scene = document.querySelector("#scene");

                ball.setAttribute("dynamic-body",{
                    shape:"sphere",
                    mass:"0",
                  })
                scene.appendChild(ball);

            }
        })

        
        
    }
})