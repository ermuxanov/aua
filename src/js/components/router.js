export function router() {
  const routes = document.querySelectorAll(".router.test");

  routes.forEach((route) => {
    let data = route.dataset.routes;
    console.log(data);
    
  });
}
