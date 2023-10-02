import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex-center paddings mx-auto wfull max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className=" h-[274px] w-full rounded-lg bg-gray-200" />
      </section>

      <section className="mt-6 w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[440px] wfull sm:w-[356px] bg-gray-200"/>
          <Skeleton className="h-[440px] wfull sm:w-[356px] bg-gray-200"/>
          <Skeleton className="h-[440px] wfull sm:w-[356px] bg-gray-200"/>
        </div>
      </section>
    </main>
  );
};

export default loading;
