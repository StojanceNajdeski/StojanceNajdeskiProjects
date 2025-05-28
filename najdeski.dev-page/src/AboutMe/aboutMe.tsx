import Background from "../../public/Background.jpg";
import PhotoOfMe from "../../public/PhotoOfMe.png";
import brainsterLogo from "../../public/brainsterLogo.png";
import programingLanguages from "../../public/programingLanguage.jpg";

const AboutMe = () => {
  return (
    <div className="relative bg-zinc-300 min-h-screen">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 flex flex-col">
        <img src={Background} alt="backgroundImage" className="w-full" />
        <img src={Background} alt="backgroundImage" className="w-full" />
      </div>
      <div className="pt-32 pb-44">
        <div className="w-[90%] mx-auto">
          <div className="flex pb-36">
            <div className="basis-2/5 z-10">
              <img src={PhotoOfMe} alt="PhotoOfMe" />
              <p className="text-center manropeFont text-3xl bg-sky-600 text-white rounded-b-3xl py-3">
                Стојанче Најдески <br />
                Junior Front-End Developer
              </p>
            </div>
            <div className="basis-3/5 z-10 pt-72 ml-15">
              <h2 className="text-6xl mb-10 manropeFont">За мене</h2>
              <p className="text-4xl nunitoFont ">
                Јас сум Стојанче Најдески, имам 22 години и сум млад ентузијаст
                за front-end програмирање. Моето патување во светот на
                програмирањето започна од љубопитност, но брзо се претвори во
                вистинска страст. Сакам да создавам функционални и визуелно
                привлечни веб-страници и постојано се трудам да напредувам во
                оваа динамична област. Моја цел е да работам на реални проекти
                каде што ќе можам да го применам наученото и да продолжам да се
                развивам како front-end девелопер.
              </p>
            </div>
          </div>
          <div className="flex pb-36">
            <div className="basis-3/5 z-10 pt-64 mr-15">
              <p className="text-4xl nunitoFont ">
                Пред една година успешно ја завршив Brainster Front-End
                Академијата, интензивна програма дизајнирана да подготви
                студенти за реалниот ИТ пазар. Академијата траеше неколку месеци
                и беше базирана на практична работа – имавме вистински проекти,
                менторски сесии и редовни фидбекови. Работевме во тимови,
                учествувавме на дизајн спринтови и учевме како да комуницираме и
                да презентираме технички решенија. Секој проект беше оценуван,
                што ни помогна да разбереме каде можеме да се подобриме.
              </p>
            </div>
            <div className="basis-2/5 z-10">
              <img
                src={brainsterLogo}
                alt="brainsterLogo"
                className="rounded-t-3xl"
              />
              <p className="text-center manropeFont text-3xl bg-sky-600 text-white rounded-b-3xl py-3">
                Brainster <br />
                Front-End Академија
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="basis-2/5 z-10">
              <img
                src={programingLanguages}
                alt="programingLanguages"
                className="rounded-t-3xl w-full"
              />
              <p className="text-center manropeFont text-3xl bg-sky-600 text-white rounded-b-3xl py-3">
                Вештини и алатки
              </p>
            </div>
            <div className="basis-3/5 z-10 pt-32 ml-15">
              <p className="text-4xl nunitoFont ">
                Во текот на академијата научив да ја гледам веб-програмата не
                само како кодирање, туку како начин на размислување и решавање
                проблеми. Започнав со основите на HTML, CSS и JavaScript, па
                продолжив со React – библиотека со која создававме динамични и
                интерактивни апликации. Работевме и со алатки како Git и GitHub
                за тимска работа, и научивме како да поврзуваме податоци преку
                API. Исто така, имавме предавања поврзани со UI/UX дизајн, што
                ми помогна да разберам како да направам веб-страница што не само
                што изгледа убаво, туку е и практична и кориснички ориентирана.
                Сето ова ми даде солидна основа и ме мотивира да продолжам со
                учење и надградба
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
