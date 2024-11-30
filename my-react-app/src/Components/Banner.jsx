function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover flex items-end"
      style={{
        backgroundImage:
          "url('https://fastly.picsum.photos/id/977/450/300.jpg?blur=2&hmac=wye__R8nkN-leTqzbqHvvK7AwZTGwZY6Nb3fzDsEx50')",
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        Placeholder Movies
      </div>
    </div>
  );
}

export default Banner;
