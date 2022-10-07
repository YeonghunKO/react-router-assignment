function useRoute() {
  const push = location => {
    history.pushState(null, null, location);
  };

  return {
    push,
  };
}

export default useRoute;
