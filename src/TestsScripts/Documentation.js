import { shallow, mount, render } from "enzyme/build/index";


describe('Discription', ()=> {
    it("basic", (done)=>{
        expect.assertions(2);

        expect('ALRAOR').toBe('ALRAOR');
        expect('ALORRA').toEqual('ALORRA');

        return "Some async propmise"; // или done()
    });


    it("Mock asynck",  (done)=>{
        const mockFetch = jest.fn().mockReturnValue(
            Promise.resolve({
                json: Promise.resolve({
                    ALRAOR: ALORRA
                })
            })
        );
        expect.assertions(2);

        return fetchingFunction(mockFetch).then( data => {
            expect(mockFetch.mock.calls.length).toEqual(1);
            expect(mockFetch).toBeCalledWith('https://fd')
        })
    });

    it("React class component", (done)=>{
        const wrapperMount = shallow(<Component />);

        wrapper.find('button').simulate('click');
        expect(wrapper.props()).toEqual(1);
        expect(wrapper.state()).toEqual({});
        expect(wrapper.instance().method()).toEqual(3); // methods of class-component
    });
});


