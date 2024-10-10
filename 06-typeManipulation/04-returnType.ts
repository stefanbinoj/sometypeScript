type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

// ReturnType defines the retutrn type itself